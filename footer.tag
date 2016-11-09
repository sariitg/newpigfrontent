<%@ tag body-content="empty" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ attribute name="isCart" required="false" type="java.lang.Boolean" %>

<c:set value="${not empty sessionScope.SiteGuestUser.emailAddress}" var="captured_email"/>

<sec:authorize ifAnyGranted="ROLE_CUSTOMERGROUP">
	<c:set value="true" var="user_logged" />
</sec:authorize>
<sec:authorize ifNotGranted="ROLE_CUSTOMERGROUP">
	<c:set value="false" var="user_logged" />
</sec:authorize>

<c:if test="${not isCart}">
	<div class="footer-one">
		<div class="container-fluid">
			<div class="row">
				<div class="footer-marketing-block">
					<div class="footer-pigalog panel">
						<cms:pageSlot position="M8" var="feature" element="div" class="panel-body">
							<cms:component component="${feature}"  />
						</cms:pageSlot>
					</div>
				</div>
				<div class="footer-marketing-block">
					<div class="footer-promo panel">
						<cms:pageSlot position="Footer-DailyDeal" var="feature">
							<cms:component component="${feature}" />
						</cms:pageSlot>
					</div>
				</div>
				<div class="footer-marketing-block">
					<div class="footer-email-capture panel">
						<c:choose>
							<c:when test="${not captured_email and not user_logged}">
								<cms:pageSlot position="EmailCapture" var="feature" element="div" id="captureEmailSlot" data-replacement="#footer-promo-block-success" class="panel-body email-address-block">
									<cms:component component="${feature}" />
								</cms:pageSlot>
								<cms:pageSlot position="M10" var="feature" element="div" id="footer-promo-block-success" class="hidden">
									<cms:component component="${feature}" element="div" id="squealDealsSlot" />
								</cms:pageSlot>
							</c:when>
							<c:otherwise>
								<cms:pageSlot position="M10" var="feature">
									<cms:component component="${feature}" element="div"/>
								</cms:pageSlot>
							</c:otherwise>
						</c:choose>
					</div>
				</div>
			</div>
		</div>
	</div>
</c:if>

<div class="footer-two">
	<div class="container-fluid multiFooter">
		<div class="mobileFooter footerTwo">
		</div>
		<div class="regularFooter">
			<div id="footer-nav-accordion" class="row panel-group" role="tablist">
				<cms:pageSlot position="Footer-CustomerService" var="feature">
					<cms:component component="${feature}" element="div" id="footer-nav-group1" class="footer-nav-group panel" />
				</cms:pageSlot>
				<cms:pageSlot position="Footer-ResourceHelp" var="feature">
					<cms:component component="${feature}" element="div" id="footer-nav-group2" class="footer-nav-group panel" />
				</cms:pageSlot>
				<cms:pageSlot position="Footer-AboutNP" var="feature">
					<cms:component component="${feature}" element="div" id="footer-nav-group3" class="footer-nav-group panel" />
				</cms:pageSlot>
	
				<div id="footer-nav-group4" class="footer-nav-group panel last">
					<h4><spring:theme code="footer.stayconnected" text="Stay Connected" /></h4>
	
					<div class="site-links">
						<div class="blog-links">
							<a class="icon-np-rss" href="/expertadvice" title="<spring:theme code="footer.expertadvice" text="Check out Expert Advice" />" target="_blank" rel="nofollow">
								<span class="sr-only">Blog</span>
							</a>
							<a href="/expertadvice" title="<spring:theme code="footer.expertadvice" text="Check out Expert Advice" />" target="_blank" rel="nofollow">
								<spring:theme code="footer.expertadvice" text="Check out Expert Advice" />
							</a>
	
						</div>
	
						   <ul class="social-links">
							   <li>
								   <a href="https://www.facebook.com/NewPigUS"
									   target="_blank"
									   title="Facebook"
									   class="icon-np-social-facebook"
									   rel="nofollow">
									   <span class="sr-only">Facebook</span>
									  </a>
								  </li>
								  <li>
									   <a href="https://www.twitter.com/NewPig"
										   target="_blank"
										   title="Twitter"
										   class="icon-np-social-twitter"
										   rel="nofollow">
										   <span class="sr-only">Twitter</span>
										  </a>
								  </li>
								  <li>
									   <a href="https://www.youtube.com/user/NewPigUS"
										   target="_blank"
										   title="YouTube"
										   class="icon-np-social-youtube"
										   rel="nofollow">
										   <span class="sr-only">YouTube</span>
										  </a>
								  </li>
								  <li>
									   <a href="https://www.linkedin.com/company/new-pig"
										   target="_blank"
										   title="LinkedIn"
										   class="icon-np-social-linkedin"
										   rel="nofollow">
										   <span class="sr-only">LinkedIn</span>
										  </a>
								  </li>
								  <li>
									   <a href="https://plus.google.com/u/0/+newpig/posts"
										   target="_blank"
										   title="Google Plus"
										   class="icon-np-social-googleplus"
										   rel="nofollow">
										   <span class="sr-only">Google Plus</span>
										  </a>
								  </li>
								  <li>
									   <a href="https://instagram.com/newpig_us/"
										   target="_blank"
										   title="Instagram"
										   class="icon-np-social-instagram"
										   rel="nofollow">
										   <span class="sr-only">Instagram</span>
										  </a>
								  </li>
						   </ul>
	
						<ul class="payment-links">
							   <li class="icon-np-cc-visa">
								 <span class="sr-only">Visa</span>
							</li>
							<li class="icon-np-cc-mastercard">
								 <span class="sr-only">Mastercard</span>
							</li>
							<li class="icon-np-cc-amex">
								 <span class="sr-only">American Express</span>
							</li>
							<li>
								<img src="//newpig.scene7.com/is/image/NewPig/icon%2DsmartPay?scl=1&amp;fmt=png-alpha" alt="Smart Pay" title="Smart Pay">
							</li>
							<li>
								   <a href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=www.newpig.com&lang=en"
									   target="_blank"
									   title="Norton"
									   rel="nofollow">
									   <img src="//newpig.scene7.com/is/image/NewPig/icon%2Dnorton?scl=1&amp;fmt=png-alpha" alt="Norton">
								  </a>
							</li>
							<li class="icon-ssl">
								   <a href="https://www.symantec.com/page.jsp?id=how-ssl-works&amp;tab=secTab5"
									   title="About SSL Certification"
									   target="_blank"
									   rel="nofollow">
									   About SSL Certification
								  </a>
							</li>
						  </ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<hr class="hrFooter">

<div class="footer-three">
	<div class="container-fluid">
		<div class="row multiFooter">
			<div class="mobileFooter footerThree">
				<div class="footer-privacy last">
					<cms:pageSlot position="Footer-LegalInfoLink" var="feature" element="div">
						<span class="separator"> &#8226;</span><cms:component component="${feature}" />
					</cms:pageSlot>
				</div>
			</div>
			<div class="regularFooter">
				<div class="footer-marketing first">
					<span class="icon-np-contact-chat-phone"></span>
					<cms:pageSlot position="Footer-NeedHelp" var="feature" element="div">
						<cms:component component="${feature}" />
					</cms:pageSlot>
				</div>
				<div class="footer-marketing last">
					<cms:pageSlot position="Footer-Guarantee" var="feature">
						<cms:component component="${feature}" />
					</cms:pageSlot>
				</div>
			</div>
		</div>
	</div>
</div>
<hr class="hrFooter">
<div class="footer-four">
	<div class="container-fluid">
		<div class="row multiFooter">
			<div class="mobileFooter last">
				<div class="footer-privacy footerFour">
					<br>
					<cms:pageSlot position="Footer-LegalInfo" var="feature" element="div" limit="1">
						<cms:component component="${feature}" />
					</cms:pageSlot>
				</div>
			</div>
			<div class="regularFooter">
				<div class="footer-contact first">
					<div class="logo-wrapper">
						<span class="icon-np-logo-mark"></span>
					</div>
					<cms:pageSlot position="Footer-Contact" var="feature" element="div">
						<cms:component component="${feature}" />
					</cms:pageSlot>
				</div>
				<hr />
				<div class="footer-privacy last">
					<cms:pageSlot position="Footer-LegalInfo" var="feature" element="div" limit="1">
						<cms:component component="${feature}" />
					</cms:pageSlot>
					<cms:pageSlot position="Footer-LegalInfoLink" var="feature" element="div">
						<span class="separator"> &#8226;</span><cms:component component="${feature}" />
					</cms:pageSlot>
				</div>
			</div>
		</div>
	</div>
</div>


<div id="modal"></div>
