<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function save(Request $request)
    {
        $userId = Auth::id();
        $comment_text = $request->comment;
        $picture_id = $request->picture_id;

        Comment::create([
            'user_id' => $userId,
            'picture_id' => $picture_id,
            'comment_text' => $comment_text
        ]);
    }

    public function update(Request $request)
    {
    }

    public function destroy(Request $request)
    {
    }
}
