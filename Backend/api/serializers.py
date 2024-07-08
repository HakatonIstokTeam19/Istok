from rest_framework import serializers
from Istok_app.models import (Finished_furniture, Tags, Finished_furniture_tags)


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ('id', 'tag')


def tags_lst():
    tags = Tags.objects.all()
    lst = []
    for tag in tags:
        t = (tag.id, tag.tag)
        lst.append(t)

    return lst


#todo разоьраться с валидациями
class FinishedFurnitureSerializer(serializers.Serializer):
    id = serializers.IntegerField(label="ID объекта", read_only=True, required=False)
    name = serializers.CharField(max_length=10, label='Название', help_text='Не более 10 символов')
    type = serializers.ChoiceField(choices=Finished_furniture.TYPES, default='1', label='Тип мебели')
    form = serializers.ChoiceField(choices=Finished_furniture.FORMS, default='1',
        label='Форма мебели')
    body_material = serializers.ChoiceField(choices=Finished_furniture.MATERIAL, default='1',
        label='Материал корпуса')
    facades_material = serializers.ChoiceField(choices=Finished_furniture.MATERIAL, default='1',
        label='Материал фасадов')
    price = serializers.CharField(allow_null=True, required=True, max_length=11, label='Стоимость')
    image_1 = serializers.ImageField(allow_null=True, required=False, label='Изображение 1')
    image_2 = serializers.ImageField(allow_null=True, required=False, label='Изображение 2')
    image_3 = serializers.ImageField(allow_null=True, required=False, label='Изображение 3')
    image_4 = serializers.ImageField(allow_null=True, required=False, label='Изображение 4')
    tags = serializers.PrimaryKeyRelatedField(many=True, queryset=Tags.objects.all())


    def create(self, validated_data):
        tags_lst = validated_data.pop('tags')
        new = Finished_furniture.objects.create(**validated_data)
        for tag in set(tags_lst):
            Finished_furniture_tags.objects.create(finished_furniture=new, finished_furniture_tags=tag)

        return new

    def update(self, instance, validated_data):
        # print('instance == ', instance)
        # print("validated_data == ", validated_data)
        instance.name = validated_data.get("name", instance.name)
        instance.type = validated_data.get("type", instance.type)
        instance.form = validated_data.get("form", instance.form)
        instance.body_material = validated_data.get("body_material", instance.body_material)
        instance.facades_material = validated_data.get("facades_material", instance.facades_material)
        instance.price = validated_data.get("price", instance.price)
        instance.image_1 = validated_data.get("image_1", instance.image_1)
        instance.image_2 = validated_data.get("image_2", instance.image_2)
        instance.image_3 = validated_data.get("image_3", instance.image_3)
        instance.image_4 = validated_data.get("image_4", instance.image_4)

        # Проверяем, равен ли набор тегов у существующего объекта, новому списку тегов из PUT запроса.
        # Так-же для правильного сравнения, оба варианта преобразуем в упорядоченный список картежей.

        sorted_list = sorted([(tag.pk, tag.tag)for tag in set(validated_data.get("tags"))])
        if sorted(list(instance.tags.all().order_by('pk').values_list())) != sorted_list:
            print('\nЭто новый набор тегов')
            Finished_furniture_tags.objects.filter(finished_furniture=instance).delete()
            for tag in validated_data.get("tags"):
                try:
                    Finished_furniture_tags.objects.create(finished_furniture=instance, finished_furniture_tags=tag)
                    print('\nсоздано новое отношение')
                except Exception as e:
                    #todo в дальнейшем для таких неизвестных ошибок, задать функцию рассылки админам на email.
                    print(f"\nНеизвестная ошибка при создании таблицы отношений!!"
                          f"\ninstance == {instance}"
                          f"\ntag == {tag}"
                          f"\nError=={e}")
                    pass
        else:
            print('\nНовый набор отношений тот же что и прежде')

        instance.save()
        return instance





































