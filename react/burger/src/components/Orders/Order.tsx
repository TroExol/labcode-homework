import React from 'react';
import { Button, createStyles, makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Sandwich, { SandwichIngredientType } from '../Sandwich/Sandwich';
import { StoreDispatchType } from '../../store';
import { deleteIngredientActionType, deleteOrderAction } from '../../store/orders';

const useStyles = makeStyles((theme) => {
    return createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
        },
        amount: {
            marginTop: '10px',
        },
        deleteButton: {
            color: 'red',
            borderColor: 'red',
            marginTop: '10px',
        },
    });
});

interface IProps {
    orderID: string;
    ingredients: SandwichIngredientType[];
    amount: number;
    deleteOrder: deleteIngredientActionType;
}

const Order = (props: IProps): JSX.Element => {
    const classes = useStyles();

    const { orderID, ingredients, amount, deleteOrder } = props;

    return (
        <div className={classes.root}>
            <Sandwich ingredients={ingredients} />

            <Typography className={classes.amount} variant="h6" component="span" color="secondary">
                Amount: {amount}
            </Typography>

            <Button
                className={classes.deleteButton}
                variant="outlined"
                onClick={() => deleteOrder({ orderID })}
            >
                Удалить заказ
            </Button>
        </div>
    );
};

const mapDispatchToProps = (dispatch: StoreDispatchType) => {
    return {
        deleteOrder: ({ orderID }: { orderID: string }) => dispatch(deleteOrderAction({ orderID })),
    };
};

export default connect(undefined, mapDispatchToProps)(Order);
