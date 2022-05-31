


export default function Header() {
    return (
        <div class="container-fluid"
        style={{'padding-left':'60px'}}>
            <div class="row">
                <div class="col-md-3">
                    <img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" 
                    style={{'width':'200px','margin':'5px'}}/>
                </div>
                <div class="col-md-6">
                    <h3 style={{'text-align':'left','font-size':'18px','margin':'20px','lineHeight': '1.2','fontWeight':'700'}}>
                    ĐẠI HỌC BÁCH KHOA HÀ NỘI<br></br>
                    TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                    </h3>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-md-1" style={{'padding-left':'100px'}}>
                            <img alt="Bootstrap Image Preview" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" />
                        </div>
                        <div class="col-md-1">
                            <img alt="Bootstrap Image Preview" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" />
                        </div>
                    </div>
                    <div class="col-md-12">
                            <div class="input-group rounded" style={{
                                "width":"200px"
                            }}>
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  style={{
                                "width":"100px"
                            }}/>
                            {/* icon */}
                                <span class="input-group-text border-0" id="search-addon">
                                    {/* <i class="fas fa-search"></i> */}
                                    <i class="bi bi-search"></i>
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}