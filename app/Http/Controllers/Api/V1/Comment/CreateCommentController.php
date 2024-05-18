<?php

namespace App\Http\Controllers\Api\V1\Comment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Comment\CreateCommentRequest;
use App\Models\Comment;
use Exception;
use Illuminate\Http\Request;

class CreateCommentController extends Controller
{
    public function __invoke(CreateCommentRequest $request)
    {
        try {
            $comment = Comment::create($request->validated());
            if ($comment) {
                return response()->json([
                    'data' => $comment,
                    'message' => 'Comment posted successfully',
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
