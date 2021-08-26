export interface NewsInterface {
    code?: string;
    title: string;
    headline?: string;
    subtitle?: string;
    bodyText?: string;
    highlight?: Boolean;
    banner_img?: string;
    small_img?: string;
    create_at?: Date;
    update_at?: any | Date;
    delete_at?: any | Date;
}