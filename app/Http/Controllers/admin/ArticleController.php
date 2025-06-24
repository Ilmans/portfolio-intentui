<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function index()
    {
        return inertia('admin/article/page');
    }

    public function create()
    {
        return inertia('admin/article/create');
    }
}
