<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function index()
    {

        $projects = Inertia::optional(function () {
            return Project::latest()->paginate(9);
        });
        return inertia('project/index', [
            'projects' => $projects
        ]);
    }
}
