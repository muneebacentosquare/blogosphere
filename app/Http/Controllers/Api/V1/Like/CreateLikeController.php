<?php

namespace App\Http\Controllers\Api\V1\Like;

use App\Http\Requests\Api\V1\Like\CreateLikeRequest;
use App\Http\Controllers\Controller;
use App\Models\Like;
use Exception;

class CreateLikeController extends Controller
{
    public function __invoke(CreateLikeRequest $request)
    {
        try {
            $like = Like::create($request->validated());
            if ($like) {
                return response()->json([
                    'data' => $like,
                    'message' => 'liked'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Provide Correct Information'
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
