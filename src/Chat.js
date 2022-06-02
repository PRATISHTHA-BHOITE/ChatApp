


export function Chat(data)
{
    return(
        
            <div className="row">
                <div className="col-md-2">
                    <div class="card">
                      <img src={data.url} class="card-img-top" alt="..."width={100} height={100}/>
                        <div class="card-body">
                            Name:<h4> {data.name}</h4>
                            Message:<p class="card-text">{data.message}</p>
                            Chat:<p class="card-text">{data.time}</p>
                        </div>
                    </div>
                </div>
            </div>
       
    )

}

export default Chat