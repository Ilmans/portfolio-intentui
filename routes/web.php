<?php

use App\Http\Controllers;
use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', Controllers\DashboardController::class)->name('dashboard');

    Route::prefix("/admin")->group(function () {
        Route::resource('articles', ArticleController::class)->names([
            'index' => 'articles.index',
            'create' => 'articles.create',
            'store' => 'articles.store',
            'edit' => 'articles.edit',
            'update' => 'articles.update',
            'destroy' => 'articles.destroy',
        ]);

        Route::resource('projects', ProjectController::class)->names([
            'index' => 'projects.index',
            'create' => 'projects.create',
            'store' => 'projects.store',
            'edit' => 'projects.edit',
            'update' => 'projects.update',
            'destroy' => 'projects.destroy',

        ]);
    });
});



require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/dev.php';
