<?php

namespace App\Http\Controllers\Api\V1\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;

class FilterCategoryController extends Controller
{
    public function __invoke(Category $category)
    {
        $category = Category::whereId($category->id)->get();
        return response()->json($category);
    }
}
