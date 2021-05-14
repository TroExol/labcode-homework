import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => {
    return createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '500px',
            padding: '20px',
            boxSizing: 'border-box',
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: '10px',
            backgroundColor: 'white',
        },
        title: {
            color: theme.palette.secondary.main,
            marginBottom: '15px',
        },
        field: {
            width: '400px',
            margin: '10px auto',
        },
    });
});

interface IProps {
    onSuccessConfirm: () => void;
}

const OrdersConfirmation = (props: IProps): JSX.Element => {
    const classes = useStyles();
    const { onSuccessConfirm } = props;
    const { handleSubmit, control, formState } = useForm();

    const onSubmitHandler = (data: { name: string; phoneNumber: string }) => {
        console.log(data);
        onSuccessConfirm();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className={classes.root}>
            <Typography variant="h5" component="span" color="primary">
                Подтверждение заказа
            </Typography>

            <Controller
                render={({ field }) => (
                    <TextField
                        className={classes.field}
                        variant="outlined"
                        label="Ваше имя"
                        error={!!formState.errors?.name?.message}
                        helperText={formState.errors?.name?.message}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...field}
                    />
                )}
                name="name"
                control={control}
                rules={{ required: { value: true, message: 'Введите имя' } }}
                defaultValue=""
            />

            <Controller
                render={({ field }) => (
                    <TextField
                        className={classes.field}
                        variant="outlined"
                        label="Ваш номер телефона"
                        error={!!formState.errors?.phoneNumber?.message}
                        helperText={formState.errors?.phoneNumber?.message}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...field}
                    />
                )}
                name="phoneNumber"
                control={control}
                rules={{
                    required: { value: true, message: 'Введите номер телефона' },
                    pattern: {
                        value: /^\+[1-9]{1}[0-9]{3,14}$/g,
                        message: 'Неправильный номер телефона',
                    },
                }}
                defaultValue=""
            />

            <Button variant="contained" color="secondary" type="submit">
                Подтвердить
            </Button>
        </form>
    );
};

export default OrdersConfirmation;
