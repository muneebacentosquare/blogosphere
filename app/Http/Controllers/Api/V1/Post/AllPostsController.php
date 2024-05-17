<?php

namespace App\Http\Controllers\Api\V1\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class AllPostsController extends Controller
{
    public function __invoke()
    {
        $posts = Post::all();
        return response()->json($posts);
    }
}
