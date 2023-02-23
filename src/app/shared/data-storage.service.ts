import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    
    private readonly BASE_URL = 'https://ng-course-recipe-book-ebcff-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.BASE_URL, recipes)
        .subscribe(response=>{
            console.log(response);
        });
    }
}