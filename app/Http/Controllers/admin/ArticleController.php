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
        return inertia('admin/article/page');
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
        ]);

        flash('Your account has been successfully created.');
        return redirect(route('articles.index'));
    }
}
