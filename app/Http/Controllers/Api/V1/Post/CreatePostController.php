<?php

namespace App\Http\Controllers\Api\V1\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Post\CreatePostRequest;
use App\Models\Post;
use Exception;
use http\Env\Response;
use Illuminate\Http\Request;

class CreatePostController extends Controller
{
    public function __invoke(CreatePostRequest $request)
    {
        try {
            $post = Post::create($request->validated());
            if ($post) {
                return response()->json([
                    'data' => $post,
                    'message' => 'Post created successfully',
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Provide correct Information'
                ], 400);
            }
        } catch (Exception $ex) {
            return response()->json([
                'status' => 500,
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}
