<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::paginate(12);
        return inertia('admin/book/page', compact('books'));
    }

    public function create()
    {
        return inertia('admin/book/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'about' => 'required|string',
            'cover_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'url' => 'required|string|max:255',
            'pages' => 'required',
            'status' => 'required'
        ]);

        $coverPath = $request->file('cover_url')->store('books/covers', 'public');


        Book::create([
            'title' => $request->title,
            'about' => $request->about,
            'cover_url' => $coverPath,
            'url' => $request->url,
            'pages' => $request->pages,
            'status' => $request->status
        ]);

        flash('Book successfully created.');
        return redirect(route('books.index'));
    }

    public function edit($id)
    {
        $book = Book::findOrFail($id);
        return inertia('admin/book/edit', compact('book'));
    }

    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'about' => 'required|string',
            'cover_url' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'url' => 'required|string|max:255',
            'pages' => 'required',
            'status' => 'required'
        ]);

        if ($request->hasFile('cover_url')) {
            if ($book->cover_url && Storage::disk('public')->exists($book->cover_url)) {
                Storage::disk('public')->delete($book->cover_url);
            }

            $coverPath = $request->file('cover_url')->store('books/covers', 'public');
        } else {
            $coverPath = $book->cover_url;
        }

        $book->update([
            'title' => $request->title,
            'about' => $request->about,
            'cover_url' => $coverPath,
            'url' => $request->url,
            'pages' => $request->pages,
            'status' => $request->status
        ]);

        flash('Book successfully updated.');
        return redirect(route('books.index'));
    }

    public function destroy($id)
    {
        Book::whereId($id)->delete();
        flash('Book successfully deleted.');
        return back();
    }
}
