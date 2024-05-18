<?php

namespace App\Http\Controllers\Api\V1\Like;

use App\Http\Controllers\Controller;
use App\Models\Like;

class DeleteLikeController extends Controller
{
    public function __invoke(Like $like)
    {
        $like->delete();
        return response()->json([
            'message' => 'Like removed'
        ]);
    }
}
