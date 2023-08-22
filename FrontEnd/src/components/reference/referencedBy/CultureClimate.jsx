import React from 'react'

function CultureClimate({data}) {
    const { comments } = data;
    return (
        <>
            <div className="cardbx-main pt-15">
                <div className="table-cardbox">
                    <div className="table-title secondary-bgcolor">
                        <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
                            Culutre and Climate
                        </h3>
                    </div>
                    <div className="cardbody-bxx">
                        {comments?.length && (
                            <div className="learning-tablebx">
                                <table className="table cstm-tablebx table-borderbx">
                                    <tbody>
                                        {comments.map((com, i) => (
                                            <tr key={i}>
                                                <td className="w-70">{com.comment}</td>
                                                <td>
                                                    <div className="progressbar">
                                                        <span
                                                            className={`progress-linebar purple-bgcolor w-${com.number}`}
                                                        ></span>
                                                    </div>
                                                </td>
                                                <td className="value-td">{com.number}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div></>
    )
}

export default CultureClimate