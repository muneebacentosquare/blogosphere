<?php

namespace App\Observers;

use Illuminate\Support\Str;
use App\Models\Category;

class CategoryObserver
{
    public function creating(Category $category): void
    {
        $category->slug = Str::slug($category->name) . '-' . random_int(1000, 10000) . '-' . random_int(10, 100);
    }
}
