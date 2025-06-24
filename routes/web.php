<?php

use App\Http\Controllers;
use App\Http\Controllers\admin\ArticleController;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', Controllers\DashboardController::class)->name('dashboard');

    Route::prefix("/admin")->group(function () {
        Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
        Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create');
        Route::post('/articles/store', [ArticleController::class, 'store'])->name('articles.store');
        Route::get('/articles/edit/{id}', [ArticleController::class, 'edit'])->name('articles.edit');
        Route::put('/articles/update/{id}', [ArticleController::class, 'update'])->name('articles.update');
    });
});



require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/dev.php';
