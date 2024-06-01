package modern.clinic.app.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import modern.clinic.app.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@Controller
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    private SecurityConfig securityConfig;

    @GetMapping("/login")
    public String redirectToAuth0Login() throws URISyntaxException {
        String redirectUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(securityConfig.getAuth0RedirectPath())
                .toUriString();

        URI uri = UriComponentsBuilder.newInstance()
                .scheme("https")
                .host(securityConfig.getAuth0Domain())
                .path("/authorize")
                .queryParam("response_type", "id_token")
                .queryParam("client_id", securityConfig.getAuth0ClientId())
                .queryParam("redirect_uri", redirectUri)
                .queryParam("state", "STATE")
                .queryParam("nonce", "NONCE")
                .build()
                .toUri();

        return "redirect:" + uri;
    }

    @GetMapping("/loginResult")
    public String loginResult(Model model) {
        return "loginResult";
    }

    @GetMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        new SecurityContextLogoutHandler().logout(request, response, authentication);
        String redirectUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(securityConfig.getAuth0RedirectPath())
                .toUriString();


        String logoutUrl = "https://" + securityConfig.getAuth0Domain() + "/v2/logout?client_id=" + securityConfig.getAuth0ClientId() + "&returnTo=" + redirectUri;

        response.sendRedirect(logoutUrl);
    }

}
