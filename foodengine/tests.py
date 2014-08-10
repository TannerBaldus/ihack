from django.test import TestCase
from django.db.models import Count, Min, Sum, Avg
from model_mommy import mommy
from foodengine.models import Recipe
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

    def test_random_single_eater(self):
        people = 1
        meals = 5
        target_servings = meals*people
        recipes = Recipe.objects.get_random_group(people,meals)
        servings = recipes.aggregate(Sum("servings"))

        self.assertGreaterEqual(servings,target_servings)

    def test_random_five_eaters(self):
        people = 5
        meals = 3
        target_servings = meals*people
        recipes = Recipe.objects.get_random_group(people,meals)
        servings = recipes.aggregate(Sum("servings"))
        self.assertTrue(self.recipe5 not in recipes)
        self.assertGreaterEqual(servings,target_servings)

    def test_update_from_json(self):

        ingredient_name1 = uuid4().hex
        ingredient_name2 = uuid4().hex
        recipe_title1 = uuid4().hex
        servings 

        ingredient_name3 = uuid4().hex
        ingredient_name4 = uuid4().hex
        recipe_title2 = uuid4().hex

        recipe_json= [{}]










