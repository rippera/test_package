import React from 'react';

type PrecognitionProviderProps = {
    children: React.ReactNode;
};
type PrecognitionConfig = {
    url: string | null;
    headers?: any;
};
type PrecognitionConfigType = {
    config: PrecognitionConfig;
};
type RequestMethodTypes = 'PUT' | 'PATCH' | 'POST' | 'DELETE' | 'GET';
type ResponseReturType = {
    message: any;
    data: any;
};
type PrecognitionType = {
    precognition: boolean;
    validate_name: string | null;
};
type Props = {
    endpoint: string;
    method: RequestMethodTypes;
    config?: {};
};
type PrecognitionReturnType<T> = {
    submit: (values: T) => Promise<ResponseReturType | undefined>;
    validateValues: (vals: Partial<Record<keyof T, any>>, fieldName?: string) => Promise<void>;
    errors: T | null;
    setErrors: React.Dispatch<React.SetStateAction<T | null>>;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    disabled: boolean;
    touched: T | null;
    loading: boolean;
};
declare const usePrecognition: <T>(props: Props) => PrecognitionReturnType<T>;

declare const Precognition: {
    init: (params: PrecognitionConfig) => void;
};
declare const PrecognitionContext: React.Context<PrecognitionConfigType>;

export { Precognition, type PrecognitionConfig, type PrecognitionConfigType, PrecognitionContext, type PrecognitionProviderProps, type PrecognitionReturnType, type PrecognitionType, type Props, type RequestMethodTypes, type ResponseReturType, usePrecognition };
