# Generated by Django 2.2.8 on 2020-07-08 02:07

from django.db import migrations, models
import django.db.models.deletion
import djongo.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('RO', '0003_auto_20200707_2207'),
        ('restaurant', '0002_auto_20200705_1258'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='food',
            name='id',
        ),
        migrations.RemoveField(
            model_name='manualtag',
            name='id',
        ),
        migrations.AddField(
            model_name='food',
            name='_id',
            field=djongo.models.fields.ObjectIdField(auto_created=True, default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='manualtag',
            name='_id',
            field=djongo.models.fields.ObjectIdField(auto_created=True, default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='manualtag',
            name='restaurant',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='RO.Restaurant'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='food',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RO.Restaurant'),
        ),
        migrations.AlterField(
            model_name='manualtag',
            name='food',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='restaurant.Food'),
        ),
        migrations.AlterField(
            model_name='manualtag',
            name='value',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
