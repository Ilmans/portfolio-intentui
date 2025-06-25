<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {

        $books = Inertia::optional(function () {
            return Book::latest()->paginate(9);
        });
        return inertia('book/index', [
            'books' => $books
        ]);
    }
}
