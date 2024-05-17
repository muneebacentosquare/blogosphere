<?php

namespace App\Http\Controllers\Api\V1\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class FilterPostController extends Controller
{
    public function __invoke(Post $post)
    {
        $post = Post::whereId($post->id)->get();
        return response()->json($post);
    }
}
