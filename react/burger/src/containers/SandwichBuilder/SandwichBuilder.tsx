import React from 'react';
import {
    Button,
    makeStyles,
    Typography,
    useTheme,
    createStyles,
    TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import Sandwich, { SandwichIngredientType } from '../../components/Sandwich/Sandwich';
import { StoreType, StoreDispatchType } from '../../store';
import {
    addIngredientAction,
    addIngredientActionType,
    deleteIngredientAction,
    deleteIngredientActionType,
    resetIngredientsAction,
    resetIngredientsActionType,
} from '../../store/ingredients';
import { addOrderAction, addOrderActionType } from '../../store/orders';

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
        resetButton: {
            color: 'red',
            border: '2px solid red',
            marginRight: '10px',
        },
        sandwichOrder: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '600px',
            marginTop: '20px',
            border: `3px solid ${theme.palette.primary.main}`,
            padding: '20px',
        },
        sandwichOrderField: {
            width: '400px',
            margin: '10px auto',
        },
    }),
);

interface IProps {
    ingredients: StoreType['ingredients'];
    addIngredient: addIngredientActionType;
    deleteIngredient: deleteIngredientActionType;
    resetIngredients: resetIngredientsActionType;
    addOrder: addOrderActionType;
}

const SandwichBuilder = (props: IProps): JSX.Element => {
    const theme = useTheme();

    const classes = useStyles(theme);

    const { ingredients, addIngredient, deleteIngredient, resetIngredients, addOrder } = props;

    const { handleSubmit, control, formState, reset } = useForm();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const onAddIngredientHandler = (ingredient: SandwichIngredientType) => {
        addIngredient({ ingredient });
    };

    const onDeleteIngredientHandler = (ingredientNumber: number) => {
        deleteIngredient({ ingredientIndex: ingredientNumber });
    };

    const onResetIngredientsHandler = () => {
        resetIngredients();
    };

    const onSubmitHandler = (data: { amount: string }) => {
        addOrder({ ingredients, amount: +data.amount });
        resetIngredients();
        reset();

        const snackBar = enqueueSnackbar('?????????? ?????????????? ???????????????? ?? ???????? ??????????????', {
            variant: 'success',
            anchorOrigin: { horizontal: 'right', vertical: 'top' },
            onClick: () => closeSnackbar(snackBar),
        });
    };

    const sandwichOrderForm = ingredients.length > 0 && (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={classes.sandwichOrder}>
                <Typography variant="h5" component="h2" color="primary">
                    ????????????????
                </Typography>

                <Controller
                    name="amount"
                    render={({ field }) => {
                        return (
                            <TextField
                                className={classes.sandwichOrderField}
                                variant="outlined"
                                label="???????????????????? ??????????????????"
                                error={!!formState.errors?.amount?.message}
                                helperText={formState.errors?.amount?.message}
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...field}
                            />
                        );
                    }}
                    control={control}
                    rules={{
                        required: { value: true, message: '?????????????????? ???????? ????????????????????' },
                        max: { value: 100, message: '???????????????????????? ???????????????????? - 100' },
                        min: { value: 1, message: '?????????????????????? ???????????????????? - 1' },
                        pattern: {
                            value: /^\d+$/g,
                            message: '?????????????? ?????????? ??????????',
                        },
                    }}
                    defaultValue=""
                />

                <Button variant="contained" color="secondary" type="submit">
                    ???????????????? ?? ??????????????
                </Button>
            </div>
        </form>
    );

    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h1" className={classes.title}>
                ???????????? ???????? ??????????????!
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

                <Button className={classes.resetButton} onClick={() => onResetIngredientsHandler()}>
                    ????????????????
                </Button>
            </div>

            <div className={classes.sandwichOutput}>
                <Sandwich
                    ingredients={ingredients}
                    onIngredientClick={(index) => onDeleteIngredientHandler(index)}
                />
            </div>

            {sandwichOrderForm}
        </div>
    );
};

// *** REDUX STORE ***
const mapStateToProps = (state: StoreType) => {
    return {
        ingredients: state.ingredients,
    };
};

const mapDispatchToProps = (dispatch: StoreDispatchType) => {
    return {
        addIngredient: ({ ingredient }: { ingredient: SandwichIngredientType }) =>
            dispatch(addIngredientAction({ ingredient })),
        deleteIngredient: ({ ingredientIndex }: { ingredientIndex: number }) =>
            dispatch(deleteIngredientAction({ ingredientIndex })),
        resetIngredients: () => dispatch(resetIngredientsAction()),
        addOrder: ({
            ingredients,
            amount,
        }: {
            ingredients: SandwichIngredientType[];
            amount: number;
        }) => dispatch(addOrderAction({ ingredients, amount })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SandwichBuilder);
