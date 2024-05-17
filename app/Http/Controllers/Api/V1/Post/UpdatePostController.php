<?php

namespace App\Http\Controllers\Api\V1\Post;

use App\Http\Requests\Api\V1\Post\UpdatePostRequest;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Exception;

class UpdatePostController extends Controller
{
    public function __invoke(UpdatePostRequest $request, Post $post)
    {
        try {
            $post->update($request->validated());
            return response()->json([
                'message' => 'Post updated Successfully'
            ], 200);
        } catch (Exception $ex) {
            return response()->json([
                'status' => 500,
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}
