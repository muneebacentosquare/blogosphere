<?php

namespace App\Http\Requests\Api\V1\Post;

use Illuminate\Foundation\Http\FormRequest;

class CreatePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'category_id' => ['required'],
            'name' => ['required'],
            'description' => ['required'],
            'status' => ['required', 'boolean']
        ];
    }
}
