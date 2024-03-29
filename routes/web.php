<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\CreateController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GaleryController;
use App\Http\Controllers\DiscoverController;
use App\Http\Controllers\OpenAIController;
use App\Http\Controllers\PictureController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Picture;
use Illuminate\Support\Facades\Redirect;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// NOT AUTH PAGES

// Welcome page
Route::get('/', [WelcomeController::class, 'view'])->name('welcome.view');
// Discover Page
Route::get('/discover', [DiscoverController::class, 'view'])->name('discover.view');
//Picture Page
Route::get('/picture', function(){return Redirect::route('discover.view');});
Route::get('/picture/{picture_id}', [PictureController::class, 'view'])->name('picture.view');
Route::get('/locale/{locale}', function($locale) {
    session()->put('locale', $locale);
    return redirect()->back();
})->name('locale.setting');


// AUTH PAGES
Route::middleware('auth')->group(function () {
    
    // Create Page
    Route::get('/create', [CreateController::class, 'view'])->name('create.view');
    Route::post('/create', [CreateController::class, 'generateImage'])->name('create.generate');
    
    // Dashboard Page
    Route::get('/dashboard', [DashboardController::class, 'view'])->name('dashboard.view');
    
    Route::get('/user', function(){return Redirect::route('discover.view');});
    Route::get('/user/{user_id}', [UserController::class, 'view'])->name('user.view');
    
    // Profile Page
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'savePicture'])->name('profile.save');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Likes to Pictures
    Route::post('/picture', [PictureController::class, 'like'])->name('picture.like');
    Route::post('/picture/save', [PictureController::class, 'saveItem'])->name('picture.save');
    Route::delete('/picture', [PictureController::class, 'delete'])->name('picture.delete');
    
    // Comments to Pictures
    Route::post('/comment', [CommentController::class, 'save'])->name('comment.save');
    Route::put('/comment', [CommentController::class, 'update'])->name('comment.update');
    Route::delete('/comment', [CommentController::class, 'delete'])->name('comment.delete');
    
});

// ADMIN page
Route::get('/admin', [AdminController::class, 'view'])->middleware('auth')->middleware('admin')->name('admin.view');
Route::delete('/admin', [AdminController::class, 'destroy'])->middleware('auth')->middleware('admin')->name('admin.destroy');

require __DIR__.'/auth.php';
