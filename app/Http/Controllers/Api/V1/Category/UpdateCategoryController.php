<?php

namespace App\Http\Controllers\Api\V1\Category;

use App\Http\Requests\Api\V1\Category\UpdateCategoryRequest;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Exception;

class UpdateCategoryController extends Controller
{
    public function __invoke(UpdateCategoryRequest $request, Category $category)
    {
        try {
            $category->update($request->validated());
            return response()->json([
                'message' => 'Category updated successfully'
            ], 200);
        } catch (Exception $ex) {
            return response()->json([
                'status' => 500,
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}
