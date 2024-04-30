<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>fake()->name(),
            'description'=>fake()->realText(),
            'image_path'=>fake()->imageUrl(),
            'priority'=>fake()->randomElement(['low','medium','high']),
            'due_date'=>fake()->dateTimeBetween('now','+1 years'),
            'assigned_user_id'=>1,
            'created_by'=>1,
            'updated_by'=>1,
            'project_id'=>1
        ];
    }
}
