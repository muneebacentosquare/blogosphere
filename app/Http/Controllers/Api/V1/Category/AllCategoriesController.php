<?php

namespace App\Http\Controllers\Api\V1\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;

class AllCategoriesController extends Controller
{
    public function __invoke()
    {
        $categories = Category::all();
        return response()->json($categories);
    }
}
