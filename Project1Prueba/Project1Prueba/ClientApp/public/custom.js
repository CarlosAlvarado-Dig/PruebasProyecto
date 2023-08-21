//unlayer.registerPropertyEditor({
//    name: 'my_color_picker',
//    layout: 'bottom',
//    Widget: unlayer.createWidget({
//        render(value) {
//            return `
//        <input class="color-value" value=${value} />
//        <button class="red">Red</button>
//        <button class="green">Green</button>
//        <button class="blue">Blue</button>
//      `
//        },
//        mount(node, value, updateValue) {
//            var input = node.getElementsByClassName('color-value')[0]
//            input.onchange = function (event) {
//                updateValue(event.target.value)
//            }

//            var redButton = node.getElementsByClassName('red')[0]
//            redButton.onclick = function () {
//                updateValue('#f00')
//            }

//            var greenButton = node.getElementsByClassName('green')[0]
//            greenButton.onclick = function () {
//                updateValue('#0f0')
//            }

//            var blueButton = node.getElementsByClassName('blue')[0]
//            blueButton.onclick = function () {
//                updateValue('#00f')
//            }
//        }
//    })
//});

unlayer.registerTool({
    type: 'whatever',
    category: 'contents',
    label: 'My Tool',
    icon: 'fa-smile',
    values: {
    },
    options: {
        default: {
            title: null,
        },
        text: {
            title: "Text",
            position: 1,
            options: {
                "color": {
                    "label": "Color",
                    "defaultValue": "#000",
                    "widget": "my_color_picker"
                }
            },
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return `
         <table width="600" borderwidth='0' cellpadding="0" cellspacing="0" style="margin: 0 auto;">
    <!-- PRIMER CUADRO    -->
    <tr>
        <td  align="center" width="100%" style="background-color: #2e317e;  ">
            <div style="bottom: 0;right: 0;width: 100%;height: 30%;background-color: transparent; text-align: center;">
                <a href="https://www.digifact.com.sv/" target="_blank">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqSD1tPmY1doYJj_thqDSLfGmpxbJBP2QKfXBYy9QbqMVBr1IwfOoxcQuQXX40UIC9qajphYtMYGwz2dGOaA3yWu5U0aFyC_rz9Gmk1Dij2bV-9-U26w7a-hkiYIawvD-NiVVFo9DwwcG8pVU5wsYN-FWyEyVD1dfHA84lSO2UVBAhRLLWJ0A7nQ/w320-h89/blanconuew%20(3).png" class="imagenuno">
                </a>
            </div>
            <font size="4" face="Sansation" color="white">
                  Envío de documento tributario electrónico &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
            </font>
            <br />
        </td>
    </tr>
    <!-- SEGUNDO CUADRO    -->
    <tr>
        <td bgcolor="white">
            <table width='100%' borderwidth='0' cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                    <!-- Imagen Panama   -->
                    <td bgcolor="#2f3432" align="left" width="50%">
                        <div style="bottom: 0;right: 0;width: 90%;height: 30%;background-color: transparent; text-align: right;">
                            <a href="https://www.digifact.com.sv/" target="_blank">
                                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4vgZ9IeoUYAwa8WMl3dEwOgko4liFtZg-_C3pq5_bC6wTTnv-tT0MGT3vcdYRPeDZ2PX8GLXJUiJu-YqW_MMLivu8m2UBZRy1H2AjLsRlgDmSrpIsV18Ykv-uGww-rwsOPTZLVP-1rBE9Sz7qN-OV1CfLXnwl6SPxtsfIlkzR_m95oHxge5JV5ZNauw/w320-h294/Env%C3%ADo%20DTE.png" width="320px" Height="285px" class="seniorpanama">
                            </a>
                        </div>
                    </td>
                    <td bgcolor="#2f3432" align="left">
                        <font size="2" face="Sansation" color="white">
                            ¡Hola!
                        </font>
                        <br />
                        <font size="6" face="Sansation" color="white">
                            <b> <var>RTaxId</var> </b>
                            <br/>
                            <b> <var>RName</var></b>
                        </font>
                        <br />
                        <br />
                        <font size="2" face="Sansation" color="white">
                            Estimado Cliente
                            <br />
                            <br />
                            <var>SName</var> 
                            <br /> 
                            <var>ESTABLECIMIENTO</var> -<var>STAXID</var>-&nbsp;&nbsp;&nbsp;&nbsp; ha&nbsp;&nbsp;&nbsp; emitido
                            <br />
                             un Documento Tributario Electr&oacute;nico -CAFE-
                            <br />
                            con&nbsp;&nbsp; la&nbsp;&nbsp; siguiente&nbsp;&nbsp; informaci&oacute;n
                            <br />
                        </font>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
        `
            }
        }),
        exporters: {
            web: function () {
            },
            email: function () {
            }
        },
    },
});
