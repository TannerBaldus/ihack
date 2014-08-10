from django.db import models
from django.db import transaction
import random
import itertools




class RecipeManager(models.Manager):

    # def get_recipe_group(people,meals):
    #     """Gets a queryset of recipes with shared ingredients"""
    #     recipes = self.filter(servings__in=servings_multiples)
    #     title_combos = [combo for combo in itertools.combinations(init_recipe.title)


    def  recipes_by_servings(self,people,meals):
        """Returns a queryset of recipes with proper serving multiples"""
        serving_multiples = range(people,(people*meals)+1,people)
        return self.filter(servings__in=serving_multiples)



    def random_group(self):

        index = lambda count : random.randint(0,count)
        recipe_count = self.count()
        ids = [index(recipe_count) for i in range(6)]
        return Recipe.objects.filter(id__in=ids)
        








    def get_random_serving_group(self,people,meals):
        """ """
        target_servings = people*meals
        total_servings = 0
        possible_recipes = self.recipes_by_servings(people,meals)
        recipe_count = possible_recipes.count()

        if possible_recipes.count()<=meals:
            return possible_recipes

        index = random.randint(0,recipe_count)
        recipe_ids = []

        while total_servings <= target_servings:
            recipe = possible_recipes[index]
            recipe_ids.append(recipe.id)
            random.randint(0,recipe_count)

        return self.filter(id__in=recipe_ids)


class Recipe(models.Model):
    description = models.TextField(null=True)
    title = models.CharField(max_length=256)
    image_url = models.TextField(null=True)
    servings = models.IntegerField(default=4)
    objects = RecipeManager()

    def __unicode__(self):
        return self.title





class Ingredient(models.Model):
    name = models.CharField(max_length=256,unique=True)
    recipes = models.ManyToManyField(Recipe,related_name='ingredients')

    def __unicode__(self):
        return self.name


@transaction.atomic
def update_from_wikia_json(recipe_json):
    """Creates DB entries from wikia recipes json """

    for recipe in recipe_json:
        if not recipe.get("image_url") or not recipe.get("title"):
            continue 

        title = recipe["title"]
        image_url = recipe["image_url"]
        recipe_model = Recipe(title=title,image_url=image_url)
        recipe_model.save()
        ingredeints = recipe.get("ingredients")

        ingredient_ids = []
        for ingredient_name in ingredeints:
            # print "in name", ingredient_name
            ingredient = Ingredient.objects.get_or_create(name=ingredient_name)
            # print "in instance", ingredient
            ingredient_ids += [ingredient[0].id]

        recipe_model.ingredients.add(*ingredient_ids)
        # print recipe_model.ingredients.all()







