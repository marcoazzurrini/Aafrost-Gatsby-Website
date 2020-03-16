import React, { Component } from "react"

class CrispChat extends Component {
  componentDidMount() {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "YOUR_WEBSITE_ID"

    ;(function() {
      var d = document
      var s = d.createElement("script")

      s.src = "https://client.crisp.chat/l.js"
      s.async = 1
      d.getElementsByTagName("head")[0].appendChild(s)
    })()
  }

  render() {
    return (
      <Router>
        <Route path="/" component={LogPageView} />
        <div className="content">
          <PageWrapper>
            <Header title="Site Title" />
            <Routes />
            <Footer />
          </PageWrapper>
        </div>
      </Router>
    )
  }
}
export default CrispChat
