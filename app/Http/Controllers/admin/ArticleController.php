<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ArticleController extends Controller
{

    public function index()
    {
        $articles = Article::with('topic')->paginate(12);
        return inertia('admin/article/page', compact("articles"));
    }

    public function create()
    {
        $topics = Topic::all();
        return inertia('admin/article/create', compact('topics'));
    }

    public function store(Request $request)
    {
        Article::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'teaser' => $request->teaser,
            'topic_id' => $request->topic,
            'content' => $request->content,
            'status' => $request->status,
        ]);

        flash('Your account has been successfully created.');
        return redirect(route('articles.index'));
    }

    public function edit($id)
    {
        $topics = Topic::all();
        $article = Article::with('topic')->find($id);
        return inertia('admin/article/edit', compact('topics', 'article'));
    }

    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $article->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'teaser' => $request->teaser,
            'topic_id' => $request->topic,
            'content' => $request->content,
            'status' => $request->status,
        ]);

        flash('Article successfully updated.');
        return redirect(route('articles.index'));
    }
}
