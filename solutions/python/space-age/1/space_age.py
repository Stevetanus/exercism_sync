class SpaceAge:
    secs_earth = 31557600
    secs_mercury = 31557600 * 0.2408467
    secs_venus = 31557600 * 0.61519726
    secs_mars = 31557600 * 1.8808158
    secs_jupiter = 31557600 * 11.862615
    secs_saturn = 31557600 * 29.447498
    secs_uranus = 31557600 * 84.016846
    secs_neptune = 31557600 * 164.79132
    def __init__(self, seconds):
        self.second = seconds
    def on_earth(self):
        return round(self.second / SpaceAge.secs_earth, 2)
    def on_mercury(self):
        return round(self.second / SpaceAge.secs_mercury, 2)
    def on_venus(self):
        return round(self.second / SpaceAge.secs_venus, 2)
    def on_mars(self):
        return round(self.second / SpaceAge.secs_mars, 2)
    def on_jupiter(self):
        return round(self.second / SpaceAge.secs_jupiter, 2)
    def on_saturn(self):
        return round(self.second / SpaceAge.secs_saturn, 2)
    def on_uranus(self):
        return round(self.second / SpaceAge.secs_uranus, 2)
    def on_neptune(self):
        return round(self.second / SpaceAge.secs_neptune, 2)
