from django.test import TestCase
from django.urls import reverse, resolve

# Create your tests here.

class TestViews(TestCase):

    def testRegisterView(self):
        # Arrange
        name_view = 'register_view'
        path = reverse(name_view)
        expected = 'register_view'
        result = 'a'

        #Act
        result = resolve(path).view_name

        #Assert
        assert result == expected

    def testAdoptionView(self):
        #Arrange
        name_view = 'dog_detail'
        path = reverse(name_view, kwargs={'pk': 1})
        expected = 'dog_detail'
        result = 'a'

        #Act
        result = resolve(path).view_name

        #Assert
        assert result == expected

