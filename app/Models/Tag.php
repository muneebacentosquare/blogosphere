<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_id',
        'tag'
    ];

    public function post(): belongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
