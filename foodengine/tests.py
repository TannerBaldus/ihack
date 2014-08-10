from django.test import TestCase
from django.db.models import Count, Min, Sum, Avg
from model_mommy import mommy
from foodengine.models import Recipe
from foodengine.models import Ingredient
from foodengine.models import update_from_wikia_json
import unittest 
from uuid import uuid4


# Create your tests here.
class RecipeTest(unittest.TestCase):

    @classmethod
    def setup_class(cls):
        cls.recipe1 = mommy.make_recipe('foodengine.recipe',title="Foo Cupcakes",servings=20)
        cls.recipe2 = mommy.make_recipe('foodengine.recipe',title="Honey Chicken",servings=10)
        cls.recipe3 = mommy.make_recipe('foodengine.recipe',title="Beef Wellington",servings=2)
        cls.recipe4 = mommy.make_recipe('foodengine.recipe',title="Drumsticks",servings=5)
        cls.recipe5 = mommy.make_recipe('foodengine.recipe',title="Sammich",servings=1)
        
    @classmethod
    def teardown_class(cls):
        cls.recipe1.delete()
        cls.recipe2.delete()
        cls.recipe3.delete()
        cls.recipe4.delete()
        cls.recipe5.delete()

    @unittest.skipIf(not hasattr(Recipe,"servings"),"no servings")
    def test_random_single_eater(self):
        people = 1
        meals = 5
        target_servings = meals*people
        recipes = Recipe.objects.get_random_group(people,meals)
        servings = recipes.aggregate(Sum("servings"))

        self.assertGreaterEqual(servings,target_servings)

    @unittest.skipIf(not hasattr(Recipe,"servings"),"no servings")
    def test_random_five_eaters(self):
        people = 5
        meals = 3
        target_servings = meals*people
        recipes = Recipe.objects.get_random_group(people,meals)
        servings = recipes.aggregate(Sum("servings"))
        self.assertTrue(self.recipe5 not in recipes)
        self.assertGreaterEqual(servings,target_servings)

    def test_update_from_json(self):

        ingredient_name1 = "no.1 "+uuid4().hex
        ingredient_name2 = "no.2 "+uuid4().hex
        recipe_title1 = "no.1"+uuid4().hex

        ingredient_name3 = "no.3 "+uuid4().hex
        ingredient_name4 =ingredient_name1
        recipe_title2 = "no.2 "+uuid4().hex

        recipe_json= [{"title":recipe_title1,'ingredients':[ingredient_name1,ingredient_name2],"image_url":'foo.com'},
                    {"title":recipe_title2,'ingredients':[ingredient_name3,ingredient_name4],"image_url":'foo.com'}]
        
        update_from_wikia_json(recipe_json)

        recipe1 = Recipe.objects.get(title=recipe_title1)
        ingredient1 = Ingredient.objects.get(name=ingredient_name1)
        ingredient2 = Ingredient.objects.get(name=ingredient_name2)

        recipe2 = Recipe.objects.get(title=recipe_title2)
        ingredient3 = Ingredient.objects.get(name=ingredient_name3)
        ingredient4 = Ingredient.objects.get(name=ingredient_name4)




        print recipe1.ingredients.all()
        print recipe2.ingredients.all()
        self.assertEqual(ingredient4,ingredient1)
        self.assertTrue(ingredient1 in recipe1.ingredients.all())
        self.assertTrue(ingredient2 in recipe1.ingredients.all())

        self.assertTrue(ingredient3 in recipe2.ingredients.all())
        self.assertTrue(ingredient4 in recipe2.ingredients.all())


        recipe1.delete()
        recipe2.delete()
        ingredient1.delete()
        ingredient2.delete()
        ingredient3.delete()
        ingredient4.delete()











