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
            return Article::with('topic')->latest()->paginate(10);
        });
        return inertia('article/index', [
            'articles' => $articles
        ]);
    }
}
