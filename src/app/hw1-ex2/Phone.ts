export class Phone
{
    public mobile: string = "";
    public home: string = "";
    public fax: string = "";

    constructor(mobile: string, home: string, fax: string)
    {
        this.mobile = mobile;
        this.home = home;
        this.fax = fax;
    }
}