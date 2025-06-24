<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{

    public function index()
    {
        $projects = Project::paginate(12);
        return inertia('admin/project/page', compact('projects'));
    }

    public function create()
    {
        return inertia('admin/project/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|string|max:255',
            'cover_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'url' => 'nullable|url',
            'status' => 'required|in:publish,draft',
        ]);
        $coverPath = $request->file('cover_url')->store('projects/covers', 'public');

        Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'tech_stack' => $request->tech_stack,
            'cover_url' => $coverPath,
            'url' => $request->url,
            'status' => $request->status,
        ]);

        flash('Project successfully created.');
        return redirect(route('projects.index'));
    }

    public function edit($id)
    {
        $project = Project::findOrFail($id);
        return inertia('admin/project/edit', compact('project'));
    }


    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|string|max:255',
            'cover_url' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'url' => 'nullable|url',
            'status' => 'required|in:publish,draft',
        ]);

        if ($request->hasFile('cover_url')) {

            if ($project->cover_url && Storage::disk('public')->exists($project->cover_url)) {
                Storage::disk('public')->delete($project->cover_url);
            }

            $coverPath = $request->file('cover_url')->store('projects/covers', 'public');
        } else {
            $coverPath = $project->cover_url;
        }

        $project->update([
            'name' => $request->name,
            'description' => $request->description,
            'tech_stack' => $request->tech_stack,
            'cover_url' => $coverPath,
            'url' => $request->url,
            'status' => $request->status,
        ]);

        flash('Project successfully updated.');
        return redirect(route('projects.index'));
    }

    public function destroy($id)
    {
        Project::whereId($id)->delete();
        flash('Project successfully deleted.');
        return back();
    }
}
