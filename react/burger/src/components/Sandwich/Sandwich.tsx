import React from 'react';
import { makeStyles, Typography, useTheme, createStyles } from '@material-ui/core';
import SandwichBread from './Ingredients/SandwichBread';
import SandwichBacon from './Ingredients/SandwichBacon';
import SandwichCheese from './Ingredients/SandwichCheese';
import SandwichCucumber from './Ingredients/SandwichCucumber';

export type SandwichIngredientType = 'bacon' | 'cheese' | 'cucumber';

const ingredientsMap: { [key in SandwichIngredientType]: JSX.Element } = {
    bacon: <SandwichBacon />,
    cheese: <SandwichCheese />,
    cucumber: <SandwichCucumber />,
};

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
    }),
);

interface IProps {
    ingredients: SandwichIngredientType[];
    onIngredientClick: (ingredientIndex: number) => void;
}

const Sandwich = ({ ingredients, onIngredientClick }: IProps): JSX.Element => {
    const theme = useTheme();

    const classes = useStyles(theme);

    const sandwichIngredients: JSX.Element[] = [];

    ingredients.forEach((ingredient, index) => {
        const ingredientComponent = (
            <div
                key={`${ingredient + index}`}
                onClick={() => onIngredientClick(index)}
                aria-hidden="true"
            >
                {ingredientsMap[ingredient]}
            </div>
        );

        sandwichIngredients.push(ingredientComponent);
    });

    return (
        <div className={classes.root}>
            <SandwichBread />

            {sandwichIngredients.length > 0 ? (
                sandwichIngredients
            ) : (
                <Typography color="primary" variant="h4" component="span">
                    Нет ингредиентов
                </Typography>
            )}

            <SandwichBread />
        </div>
    );
};

export default Sandwich;
