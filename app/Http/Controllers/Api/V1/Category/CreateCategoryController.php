<?php

namespace App\Http\Controllers\Api\V1\Category;

use App\Http\Requests\Api\V1\Category\CreateCategoryRequest;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Exception;

class CreateCategoryController extends Controller
{
    public function __invoke(CreateCategoryRequest $request)
    {
        try {
            $category = Category::create($request->validated());
            if ($category->save()) {
                return response()->json([
                    'data' => $category,
                    'message' => 'Category stored successfully',
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Provide correct information'
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
