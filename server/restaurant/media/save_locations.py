from enum import Enum


class FoodSaveLocations(Enum):
    """Enum for valid save locations"""
    picture = 'Food Picture'

    @classmethod
    def choices(cls):
        """
        Gets the choices in tuple form
        :return: App name and value in tuple for
        """
        return tuple((location.name, location.value) for location in cls)


class RestaurantSaveLocations(Enum):
    """Enum for valid save locations"""
    cover_photo_url = "Cover Photo"
    logo_url = 'Logo'
    owner_picture_url = 'Owner Picture'

    @classmethod
    def choices(cls):
        """
        Gets the choices in tuple form
        :return: App name and value in tuple for
        """
        return tuple((location.name, location.value) for location in cls)
