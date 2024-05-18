<?php

namespace App\Http\Requests\Api\V1\Like;

use Illuminate\Foundation\Http\FormRequest;

class CreateLikeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'user_id' => ['required'],
            'post_id' => ['required']
        ];
    }
}
