﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kandidaty_na_rabotu_v_organizaciyu
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Организация.
    /// </summary>
    // *** Start programmer edit section *** (Организация CustomAttributes)

    // *** End programmer edit section *** (Организация CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОрганизацияE", new string[] {
            "Наименование as \'Наименование\'",
            "Адрес as \'Адрес\'",
            "ТелОрганиз as \'Тел организ\'"})]
    [View("ОрганизацияL", new string[] {
            "Наименование as \'Наименование\'",
            "Адрес as \'Адрес\'",
            "ТелОрганиз as \'Тел организ\'"})]
    public class Организация : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private string fАдрес;
        
        private int fТелОрганиз;
        
        // *** Start programmer edit section *** (Организация CustomMembers)

        // *** End programmer edit section *** (Организация CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Организация.Адрес CustomAttributes)

        // *** End programmer edit section *** (Организация.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Организация.Адрес Get start)

                // *** End programmer edit section *** (Организация.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Организация.Адрес Get end)

                // *** End programmer edit section *** (Организация.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организация.Адрес Set start)

                // *** End programmer edit section *** (Организация.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Организация.Адрес Set end)

                // *** End programmer edit section *** (Организация.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Организация.Наименование CustomAttributes)

        // *** End programmer edit section *** (Организация.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Организация.Наименование Get start)

                // *** End programmer edit section *** (Организация.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Организация.Наименование Get end)

                // *** End programmer edit section *** (Организация.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организация.Наименование Set start)

                // *** End programmer edit section *** (Организация.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Организация.Наименование Set end)

                // *** End programmer edit section *** (Организация.Наименование Set end)
            }
        }
        
        /// <summary>
        /// ТелОрганиз.
        /// </summary>
        // *** Start programmer edit section *** (Организация.ТелОрганиз CustomAttributes)

        // *** End programmer edit section *** (Организация.ТелОрганиз CustomAttributes)
        public virtual int ТелОрганиз
        {
            get
            {
                // *** Start programmer edit section *** (Организация.ТелОрганиз Get start)

                // *** End programmer edit section *** (Организация.ТелОрганиз Get start)
                int result = this.fТелОрганиз;
                // *** Start programmer edit section *** (Организация.ТелОрганиз Get end)

                // *** End programmer edit section *** (Организация.ТелОрганиз Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организация.ТелОрганиз Set start)

                // *** End programmer edit section *** (Организация.ТелОрганиз Set start)
                this.fТелОрганиз = value;
                // *** Start programmer edit section *** (Организация.ТелОрганиз Set end)

                // *** End programmer edit section *** (Организация.ТелОрганиз Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОрганизацияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацияE", typeof(IIS.Kandidaty_na_rabotu_v_organizaciyu.Организация));
                }
            }
            
            /// <summary>
            /// "ОрганизацияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацияL", typeof(IIS.Kandidaty_na_rabotu_v_organizaciyu.Организация));
                }
            }
        }
    }
}
