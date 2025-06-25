<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {

        $articles = Inertia::optional(function () {
            return Article::with('topic')->latest()->whereStatus('published')->paginate(9);
        });
        return inertia('article/index', [
            'articles' => $articles
        ]);
    }

    public function show(Article $article)
    {
        $article->load('topic');
        return inertia('article/show', compact('article'));
    }
}
