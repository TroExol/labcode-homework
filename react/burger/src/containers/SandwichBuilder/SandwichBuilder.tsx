import React, { useState } from 'react';
import { Button, makeStyles, Typography, useTheme, createStyles } from '@material-ui/core';
import SandwichBread from '../../components/SandwichIngredients/SandwichBread';
import SandwichBacon from '../../components/SandwichIngredients/SandwichBacon';
import SandwichCheese from '../../components/SandwichIngredients/SandwichCheese';
import SandwichCucumber from '../../components/SandwichIngredients/SandwichCucumber';

type SandwichIngredientType = 'bacon' | 'cheese' | 'cucumber';

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
            marginTop: '20px',
            boxSizing: 'border-box',
        },
        title: {
            color: theme.palette.secondary.main,
            marginBottom: '15px',
        },
        sandwichManagement: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '600px',
            marginBottom: '10px',
        },
        sandwichOutput: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
        baconButton: {
            color: '#b33e10',
            border: '2px solid #b33e10',
            marginRight: '10px',
        },
        cheeseButton: {
            color: '#f5c451',
            border: '2px solid #f5c451',
            marginRight: '10px',
        },
        cucumberButton: {
            color: '#36b310',
            border: '2px solid #36b310',
            marginRight: '10px',
        },
    }),
);

const SandwichBuilder = (): JSX.Element => {
    const theme = useTheme();

    const classes = useStyles(theme);

    const [ingredients, setIngredients] = useState<SandwichIngredientType[]>([]);

    const onAddIngredientHandler = (ingredient: SandwichIngredientType) => {
        setIngredients((currentState) => {
            const newState = [...currentState];
            newState.unshift(ingredient);
            return newState;
        });
    };

    const onDeleteIngredientHandler = (ingredientNumber: number) => {
        setIngredients((currentState) => {
            const newState = [...currentState];
            newState.splice(ingredientNumber, 1);
            return newState;
        });
    };

    const sandwichIngredients: JSX.Element[] = [];

    ingredients.forEach((ingredient, index) => {
        const ingredientComponent = (
            <div
                key={`${ingredient + index}`}
                onClick={() => onDeleteIngredientHandler(index)}
                aria-hidden="true"
            >
                {ingredientsMap[ingredient]}
            </div>
        );

        sandwichIngredients.push(ingredientComponent);
    });

    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h1" className={classes.title}>
                Собери свой сэндвич!
            </Typography>

            <div className={classes.sandwichManagement}>
                <Button
                    className={classes.baconButton}
                    onClick={() => onAddIngredientHandler('bacon')}
                >
                    +1 Bacon
                </Button>

                <Button
                    className={classes.cheeseButton}
                    onClick={() => onAddIngredientHandler('cheese')}
                >
                    +1 Cheese
                </Button>

                <Button
                    className={classes.cucumberButton}
                    onClick={() => onAddIngredientHandler('cucumber')}
                >
                    +1 Cucumber
                </Button>
            </div>

            <div className={classes.sandwichOutput}>
                <SandwichBread />
                {sandwichIngredients}
                <SandwichBread />
            </div>
        </div>
    );
};

export default SandwichBuilder;
